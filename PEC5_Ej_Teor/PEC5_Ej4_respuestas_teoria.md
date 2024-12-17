- **A. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?** 

En los formularios reactivos de Angular, **FormControl**, **FormGroup** y **FormBuilder** son elementos fundamentales para manejar y estructurar los datos de los formularios. 

**FormControl** se utiliza para rastrear el valor y el estado de validez de un solo campo en el formulario. Por ejemplo, en el ejercicio que hemos realizado, definimos controles individuales para cada campo, como `name`, `price` e `imageUrl`. Estos controles son la base de nuestro formulario, ya que nos permiten manejar cada campo de manera independiente. Aquí un ejemplo aplicado:

```typescript
import { FormControl } from '@angular/forms';

const nameControl = new FormControl(''); // Inicializa un control vacío
nameControl.setValue('Fruta'); // Actualiza el valor
console.log(nameControl.value); // Devuelve 'Fruta'
```

**FormGroup** agrupa varios `FormControl` en una estructura más compleja, como un formulario completo. Esto nos permite trabajar con todos los campos a la vez o manejar cada uno de manera individual. En el ejercicio, utilizamos un `FormGroup` para encapsular todos los controles del formulario:

```typescript
import { FormGroup, FormControl } from '@angular/forms';

const articleForm = new FormGroup({
  name: new FormControl(''),
  price: new FormControl(null),
  imageUrl: new FormControl(''),
});
console.log(articleForm.value); // Devuelve { name: '', price: null, imageUrl: '' }
```

**FormBuilder** es un servicio que facilita la creación de formularios reactivos mediante una API más concisa. En el ejercicio, utilizamos `FormBuilder` para definir nuestro formulario con un código más limpio y legible:

```typescript
import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {
  const articleForm = this.fb.group({
    name: [''],
    price: [null],
    imageUrl: [''],
    onSale: [false],
  });
}
```

- **B.Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**

Los formularios reactivos de Angular incluyen varios validadores que se utilizan para asegurar que los datos introducidos por el usuario cumplan con ciertos criterios. A continuación, se muestra una tabla que resume los validadores más comunes:

| **Validador**              | **Descripción**                                                                |
| -------------------------- | ------------------------------------------------------------------------------ |
| `Validators.required`      | Verifica que el campo no esté vacío.                                           |
| `Validators.min`           | Valida que el valor numérico sea mayor o igual a un valor mínimo especificado. |
| `Validators.max`           | Valida que el valor numérico sea menor o igual a un valor máximo especificado. |
| `Validators.minLength`     | Valida que el valor tenga una longitud mínima.                                 |
| `Validators.maxLength`     | Valida que el valor no exceda una longitud máxima.                             |
| `Validators.pattern`       | Verifica que el valor coincida con una expresión regular proporcionada.        |
| `Validators.nullValidator` | No realiza ninguna validación. Se utiliza como placeholder.                    |
| `Validators.compose`       | Combina múltiples validadores en uno solo.                                     |


- **C. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**

Los estados en los formularios reactivos son propiedades que describen el estado actual de los controles o grupos de controles. Estos estados se actualizan automáticamente en función de las interacciones del usuario y de las validaciones realizadas, proporcionando información útil sobre cómo se encuentra el formulario en un momento dado.

Entre los estados más importantes se encuentran:

1. **`pristine`**: Indica que el control no ha sido modificado desde su creación o inicialización. Cuando el usuario realiza un cambio, el estado pasa a ser `dirty`.
2. **`dirty`**: Señala que el control ha sido modificado por el usuario.
3. **`valid`**: Indica que el control cumple con todas las validaciones asociadas.
4. **`invalid`**: Señala que el control no cumple con al menos una validación.
5. **`touched`**: Muestra que el control ha recibido foco y luego lo ha perdido.
6. **`untouched`**: Indica que el control no ha recibido foco.
7. **`pending`**: Refleja que el control está esperando el resultado de una validación asincrónica.

Estos estados son esenciales para proporcionar feedback visual y funcional a los usuarios. Por ejemplo, en el ejercicio realizado, utilizamos estos estados para mostrar mensajes de error en el formulario cuando el usuario no cumple con las validaciones. Aquí un ejemplo aplicado a nuestro formulario:

```html
<div *ngIf="articleForm.get('name')?.invalid && articleForm.get('name')?.touched">
  <p class="error">El nombre es obligatorio.</p>
</div>
```

Con estos estados, gestionar la interacción del usuario con los formularios se vuelve más intuitivo y eficiente.

