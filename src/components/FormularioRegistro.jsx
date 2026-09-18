import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { auth, db, storage } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const FormularioRegistro = () => {
  const [datos, setDatos] = useState({ correo: '', password: '', nombre: '' });
  const [archivo, setArchivo] = useState(null);
  const [, forceUpdate] = useState();

  const validator = useRef(new SimpleReactValidator({
    messages: { 
      required: 'Este campo es obligatorio', 
      email: 'Correo inválido',
      min: 'Debe tener al menos 6 caracteres'
    }
  }));

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid() && archivo) {
      try {
        // 1. Firebase Auth: Crear usuario
        const userCredential = await createUserWithEmailAndPassword(auth, datos.correo, datos.password);
        
        // 2. Firebase Storage: Subir archivo
        const storageRef = ref(storage, `archivos/${userCredential.user.uid}_${archivo.name}`);
        await uploadBytes(storageRef, archivo);
        const fileUrl = await getDownloadURL(storageRef);

        // 3. Firestore: Guardar documento con los datos y la URL del archivo
        await addDoc(collection(db, 'usuarios'), {
          nombre: datos.nombre,
          correo: datos.correo,
          uid: userCredential.user.uid,
          archivoUrl: fileUrl
        });

        alert("¡Registro exitoso! Datos guardados en Firebase.");
        setDatos({ correo: '', password: '', nombre: '' });
        setArchivo(null);
        validator.current.hideMessages();
      } catch (error) {
        console.error("Error en el proceso:", error);
        alert("Error: " + error.message);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(1);
      if (!archivo) alert("Debes adjuntar un archivo");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h3>Registro de Usuario (Auth, Firestore y Storage)</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input type="text" name="nombre" value={datos.nombre} className="form-control" onChange={handleChange} />
          <span className="text-danger">{validator.current.message('nombre', datos.nombre, 'required')}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input type="email" name="correo" value={datos.correo} className="form-control" onChange={handleChange} />
          <span className="text-danger">{validator.current.message('correo', datos.correo, 'required|email')}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña (Mínimo 6 caracteres)</label>
          <input type="password" name="password" value={datos.password} className="form-control" onChange={handleChange} />
          <span className="text-danger">{validator.current.message('password', datos.password, 'required|min:6')}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Adjuntar Archivo de Perfil</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Registrar y Subir a Firebase</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;