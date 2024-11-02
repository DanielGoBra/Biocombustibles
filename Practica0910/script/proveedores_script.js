
const contenido_cliente = document.getElementById("contenido_cliente");
const contenido_provedor = document.getElementById("contenido_proveedor");
const boton1 = document.getElementById("button1");
const boton2 = document.getElementById("button2");

function mostrar_contenido_cliente() {
    if (contenido_cliente.style.display === "none") {
      contenido_cliente.style.display = "block";
      boton1.textContent = "NUESTROS CLIENTES";
    } else {
      contenido_cliente.style.display = "none";
      boton1.textContent = "NUESTROS CLIENTES";
    }
  }

  function mostrar_contenido_proveedor() {
    if (contenido_provedor.style.display === "none") {
      contenido_provedor.style.display = "block";
      boton2.textContent = "NUESTROS PROVEEDORES";
    } else {
      contenido_provedor.style.display = "none";
      boton2.textContent = "NUESTROS PROVEEDORES";
    }
  }