async function obtenerEmpleados() {
    /* .THEN
        fetch("empleados.json");
        .then((resultado) => resultado.json())
        .then((datos) => {
            const { empleados } = datos;
            // console.log(empleados);
            empleados.forEach((empleado) => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
                document.querySelector(".contenido").textContent += empleado.nombre;
            });
        });
    */
    const resultado = await fetch("empleados.json");
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();
