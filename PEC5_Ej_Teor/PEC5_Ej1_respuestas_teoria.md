- **A. ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

Los formularios dirigidos por template y los formularios reactivos en Angular se diferencian sobre todo en cómo se manejan y estructuran: 

* Los formularios dirigidos por template se centran principalmente en el archivo HTML. Aquí, la lógica del formulario se define directamente en las plantillas usando herramientas como ngModel. Estos son muy útiles en formularios pequeños y simples, ya que permite aprovechar el two-way data binding de Angular para sincronizar los datos entre el componente y la vista de forma automática. 
    
    Sin embargo, cuando el formulario empieza a alargarse o necesita validaciones más complejas, manejar toda esa lógica en el HTML puede volverse difícil.
    
* Por otro lado, los formularios reactivos son un enfoque más estructurado y escalable. Toda la configuración y lógica del formulario se define en el archivo TypeScript, separando la estructura del formulario de su representación visual. 

    Usando clases como FormGroup y FormControl, tenemos un control total sobre cada campo, lo que facilita mucho la creación de validaciones personalizadas y la manipulación de los datos. 
    
    Aunque puede parecer más complejo al principio, se recomienda para formularios grandes o con requisitos avanzados, ya que ofrece más flexibilidad y facilidad de mantenimiento a largo plazo.

- **B. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?**

    * La directiva ngModel es una herramienta súper útil en Angular que permite vincular un campo de formulario, como un input o un select, a una variable en nuestro componente. Este enlace es bidireccional, lo que significa que cualquier cambio en el valor del input actualiza automáticamente la variable del componente y viceversa. 

        Por ejemplo, si tenemos un campo de texto para el nombre, podremos usar [(ngModel)]="nombre" en el HTML, y todo lo que escribamos en el input aparecerá directamente en la variable nombre. 

    * Por otro lado, ngModelChange es un evento que se dispara cada vez que el valor asociado a ngModel cambia. 

        Por ejemplo, si queremos mostrar un mensaje en tiempo real o validar el input mientras el usuario escribe, podremos usar (ngModelChange)="onNombreChange($event)" y manejar esa lógica en una función del componente. Mientras que ngModel se encarga de gestionar automáticamente los datos, ngModelChange nos da control extra para personalizar el comportamiento cuando lo necesitemos.

- **C. Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**

En los formularios dirigidos por template, cada campo tiene estados que representan cómo el usuario interactúa con ellos o si cumplen con las validaciones establecidas. Estos estados ayudan a determinar si un campo es válido, si el usuario ya interactuó con él o si todavía no lo ha hecho. 
* Por ejemplo, el estado valid indica que el valor del campo cumple con las reglas de validación, mientras que invalid señala lo contrario. 

* También están los estados pristine y dirty. Un campo es pristine si el usuario no lo ha modificado, pero tan pronto como escriba algo, se convierte en dirty. 

    Esto es útil para evitar mostrar mensajes de error hasta que el usuario realmente intente interactuar con el campo. 
        
* Además, están los estados touched y untouched, que indican si el usuario ha hecho clic en el campo o lo ha dejado vacío. 
    
    Por ejemplo, podemos usar esto para resaltar un error solo después de que el usuario haya salido del campo sin llenarlo correctamente. 
    
    
En conjunto, estos estados son herramientas súper prácticas para gestionar la experiencia del usuario y darle retroalimentación visual y dinámica sobre sus acciones.

- **D. ¿Qué ventajas aportan los FormGroup en la composición de formularios?**

Un FormGroup es una herramienta clave a la hora de trabajar con formularios reactivos en Angular, ya que permite agrupar varios campos relacionados en una estructura lógica. 

Por ejemplo, si creamos un formulario para registrar usuarios, podemos agrupar el nombre, apellido y correo electrónico dentro de un mismo FormGroup. Esto no solo ayuda a organizar mejor el formulario, sino que también facilita mucho el acceso a los datos, ya que podremos obtener todos los valores de un grupo con un simple comando en lugar de acceder a cada campo por separado.

Además, FormGroup es muy útil para aplicar validaciones que involucren varios campos. 

Por ejemplo, si tenemos un formulario de registro donde el usuario debe confirmar su contraseña, con un FormGroup, podemos aplicar una validación al grupo completo para asegurarnos de que la contraseña y su confirmación coincidan. 

En resumen, los FormGroup no solo organizan mejor los formularios, sino que también dan más control y flexibilidad para manejar datos y validaciones.