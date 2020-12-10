<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MY CRUD</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/united/bootstrap.min.css">
</head>
<body>
    <div class="container p-5">
        <div class="row">
            <div class="col-md-6">  
                <div class="card">   
                    <div class="card-body">
                        <h1 class="h4">Agregar Tarea</h1>
                        <form id="task-form">
                            <div class="form-group">
                                <input type="text" id="Tareas-title" class="form-control" placeholder="Titulo" autofocus>
                            </div>
                            <div class="form-group">    
                                <textarea id="Tareas-Descripcion" rows="3" class="form-control" placeholder="Descripcion"></textarea>
                            </div>
                            <!--Boton que enviar la informacion del formulario a la base de datos-->
                            <button class="btn btn-outline-primary" class="btn-save">Guardar</button>
                        </form>
                    </div>
                </div>
            </div> 
            <!--Contenedor de cards-->
            <div class="col-md-6" id="contenedorTareas"> </div>
            <a href="salir.php" class="sesion">Cerrar sesión</a>
    
        </div>
    </div>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-firestore.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCz9wRnPL0XZo_rDxem_R1egDl2VXuSm8E",
    authDomain: "tasks-crud.firebaseapp.com",
    projectId: "tasks-crud",
    storageBucket: "tasks-crud.appspot.com",
    messagingSenderId: "406815252700",
    appId: "1:406815252700:web:db8c3292eee07639425419"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

    


<script src="index.js"></script>
</body>
</html>
