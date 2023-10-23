# Proyecto 2 Ingeniería Web

## Objetivos

1. Interiorizar el proceso de desarrollo web fullstack usando NextJS, React, Tailwind.
2. Interiorizar el funcionamiento de la autenticación tanto en el front como en el back.
3. Entender el funcionamiento de una app de administración usando funciones básicas de CRUD.

## Descripción del Proyecto

### Descripción General

El proyecto tiene como objetivo desarrollar una aplicación web de administración de inventario. La aplicación permitirá a los usuarios gestionar materiales y movimientos de inventario, así como administrar usuarios con diferentes roles. La web se construirá utilizando tecnologías como NextJS, React, y TailwindCSS, y se integrará con una base de datos en Supabase.

### Funcionalidades

- Autenticación de usuarios
- Página de landing con opción para iniciar sesión
- Sidebar con enlaces a diferentes páginas (Inventarios, Materiales, Usuarios)
- Gestión de inventarios con visualización de movimientos y gráficas
- Gestión de materiales con opción para agregar nuevos
- Gestión de usuarios con roles diferenciados (ADMIN, USER)

### Descripción de las Tablas

- `Account`: Almacena información de cuentas de proveedores externos para autenticación. Esta tabla es usada por NextAuth y no debe ser modificada en el backend.
- `Session`: Almacena sesiones de usuario. Esta tabla es usada por NextAuth y no debe ser modificada en el backend.
- `User`: Almacena información de los usuarios, incluyendo un rol asignado.
- `Material`: Almacena materiales que se pueden gestionar en el inventario.
- `InventoryMovement`: Almacena movimientos de inventario (entradas y salidas de materiales).
- `Role`: Almacena roles disponibles en el sistema (ADMIN, USER).
- `VerificationToken`: Almacena tokens para verificación de usuarios. Esta tabla es usada por NextAuth y no debe ser modificada en el backend.

#### Relaciones

- `User` tiene una relación uno a muchos con `Account`, `Session`, `Material`, e `InventoryMovement`.
- `Material` tiene una relación uno a muchos con `InventoryMovement`.
- `Role` tiene una relación uno a muchos con `User`.

### Descripción de Roles

- `ADMIN`: Tiene acceso completo a todas las funcionalidades, incluida la gestión de usuarios y la creación de materiales.
- `USER`: Tiene acceso a la gestión de inventarios y materiales, pero no puede administrar usuarios ni crear nuevos materiales.

## Instrucciones

1. Visualizar el diseño de base en el siguiente [link](https://www.figma.com/file/VZgeqdJ59rUR76jAxlillL/Wireframes-Proyecto-2).
2. Si el estudiante desea, puede hacer una copia del proyecto en su Figma personal, pero esto no tiene nota adicional.
3. Crear su propia implementación del diseño, basado en los wireframes de Figma, usando las siguientes tecnologías:
   - NextJS
   - TailwindCSS
   - TypeScript
4. Clonar el código de base desde el repositorio e instalar las dependencias.
5. Crear una base de datos en Supabase.
6. Crear un archivo `.env` en la raíz del proyecto y ejecutar el comando `npx prisma migrate dev --name migracion-inicial`. Este comando creará todas las tablas en la base de datos.
7. El proyecto debe contener las siguientes secciones:
   - **a) Una página de landing con un botón para iniciar sesión**
   - **b) Una vez se inicia sesión, el sistema muestra un sidebar a la izquierda, que se mantiene fijo y contiene:**
     1. Información personal: La foto del usuario que tiene sesión iniciada y su nombre
     2. Inventarios: un link para acceder a la página de inventarios. Visible tanto para el rol ADMIN como para el rol USER.
     3. Materiales: un link para acceder a la página de materiales. Visible tanto para el rol ADMIN como para el rol USER.
     4. Usuarios: un link para acceder a la página de usuarios. Sólo visible para usuarios con el rol ADMIN.
   - **c) Una página para gestión de inventarios, que contiene:**
     1. Un dropdown para seleccionar el material que se quiere visualizar
     2. Una tabla para visualizar los movimientos de inventario. La tabla muestra el id del movimiento, la fecha, la cantidad de unidades que entraron, la cantidad de unidades que salieron y la persona que ejecutó el movimiento.
     3. Un botón de "Agregar movimiento", que muestra un diálogo con:
        - Un título que muestra el material seleccionado en la tabla
        - El tipo de movimiento (salida o entrada)
        - La cantidad de elementos que salen o entran
        - Un botón para cancelar la entrada. Este botón cierra el diálogo.
        - Un botón para crear el movimiento. Este botón debe crear un movimiento en la base de datos, registrando como responsable del movimiento al usuario que tiene sesión iniciada. Este botón debe mostrar un loading y un mensaje de éxito o error. Si la creación del movimiento es exitosa, el sistema debe cerrar el diálogo y actualizar automáticamente la tabla de movimientos.
     4. Reglas adicionales:
        - Tanto el rol de USER como el rol de ADMIN pueden acceder a la página de inventarios.
        - Tanto el rol de USER como el de ADMIN pueden crear un movimiento de inventario.
   - **d) Una página para gestión de materiales, que contiene:**
     1. Una tabla para visualizar los materiales del sistema. La tabla muestra el id del material, el nombre del material, el saldo del material y quién creó el material.
     2. Un botón de "Agregar material", que muestra un diálogo con:
        - Un input para escribir el nombre del material
        - El saldo inicial del material
        - Un botón para cancelar la entrada. Este botón cierra el diálogo.
        - Un botón para crear el movimiento. Este botón debe crear el material, registrando como responsable del movimiento al usuario que tiene sesión iniciada. Además, debe crear un movimiento de entrada asociado al material que se está creando, considerando el saldo inicial. Este botón debe mostrar un loading y un mensaje de éxito o error. Si la creación del movimiento es exitosa, el sistema debe cerrar el diálogo y actualizar automáticamente la tabla de materiales.
     3. Reglas adicionales:
        - Tanto los usuarios de rol USER como los de rol ADMIN pueden acceder a la página de materiales.
        - Sólo los usuarios de rol ADMIN pueden ver el botón de crear material.
        - Sólo los usuarios de rol ADMIN pueden hacer uso del endpoint de CREATE del api de materiales.
   - **e) Una página para gestión de usuarios, que contiene:**
     1. Una tabla para visualizar los usuarios del sistema. La tabla muestra el id del usuario, la fecha de creación del usuario, el correo del usuario y el rol que tiene asignado.
     2. Un botón de "Editar usuario", que muestra un diálogo con:
        - Un texto que muestra el correo del usuario a editar
        - Un dropdown con los roles disponibles en el sistema. Debe aparecer por defecto el rol que tiene el usuario.
        - Un botón para cancelar la entrada. Este botón cierra el diálogo.
        - Un botón para crear el movimiento. Este botón debe actualizar el rol del usuario seleccionado. Este botón debe mostrar un loading y un mensaje de éxito o error. Si la edición del usuario es satisfactoria, el sistema debe cerrar el diálogo y actualizar automáticamente la tabla de usuarios.
     3. Reglas adicionales:
        - Solo usuarios con el rol ADMIN pueden acceder a la página de usuarios.
        - Solo usuarios con el rol ADMIN pueden hacer uso del endpoint PUT del api de usuarios.
        - Solo usuarios con el rol ADMIN pueden hacer uso del endpoint GET del api de usuarios.

## Condiciones Generales del Desarrollo

- La calificación se hará de acuerdo con las rúbricas encontradas en el Excel [Criterios de calificación proyecto 2.xlsx](https://udeaeduco.sharepoint.com/:x:/r/sites/IngenieraWeb/_layouts/15/Doc.aspx?sourcedoc=%7BE7CF998D-0521-481B-9535-B0CB4F73D2B8%7D&file=Criterios%20de%20calificaci%C3%B3n%20proyecto%202.xlsx&action=default&mobileredirect=true).
- El proyecto debe ser desplegado en Vercel.
- Los componentes desarrollados deben tener interfaces y tipados correctos, tal y como se vio en clase.
- Se deben utilizar los estilos de Tailwind.
- Se rebajará un 0.05 en la nota por cada error de ortografía. Máximo hasta 1 unidad.
- El grupo debe enviar un link de su repositorio de Github al profesor, a más tardar el lunes 20 de noviembre a las 11:59 PM.
