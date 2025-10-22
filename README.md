# React + TypeScript + Vite

## Spanish
- Stack: Usé React con TypeScript y CSS plano. Elegí simplicidad y claridad frente a frameworks como Tailwind o Material UI.
- Ruteo: Implementé react-router-dom, ideal para Vite y proyectos pequeños.
- Consumo de API: Usé fetch con useEffect y useState. Es suficiente en esta escala, aunque en producción optaría por React Query.
- Detalle de producto: Decidí hacer un refetch en /products/:id. Esto asegura data actualizada aunque entres por URL directa, aunque implica más llamadas a la API.
- Búsqueda: Filtrado en memoria con Array.filter. Escalable en este contexto, pero para grandes volúmenes aplicaría búsqueda en servidor.
- Accesibilidad: Agregué alt en imágenes y podrian aplicarse las "aria" de los elementos com inputs o buttons. No era obligatorio, pero aporta valor y buenas prácticas.
- Estilos: Definí grid con CSS plano y clases específicas. Esto lo hace entendible y mantenible sin depender de librerías externas.
- Responsividad: Use grid con auto-fill para adaptarse a todos los tamaños de pantalla
- Loading de carga: Usé mensajes de “Loading…” para mejorar la UX.

## English
- Stack: I used React with TypeScript and plain CSS. I chose simplicity and clarity over frameworks like Tailwind or Material UI.
- Routing: I implemented react-router-dom, ideal for Vite and small projects.
- API Consumption: I used fetch with useEffect and useState. It's sufficient at this scale, although in production I'd opt for React Query.
- Product Detail: I decided to refetch /products/:id. This ensures up-to-date data even if you access it via a direct URL, although it involves more API calls.
- Search: In-memory filtering with Array.filter. Scalable in this context, but for large volumes I'd apply server-side fetching.
- Accessibility: I added alts to images, and "aria" tags could be applied to elements such as inputs or buttons. It wasn't mandatory, but it adds value and provides good practices.
- Styles: I defined the grid with plain CSS and specific classes. This makes it understandable and maintainable without relying on external libraries.
- Responsiveness: Use an auto-fill grid to adapt to all screen sizes.
- Loading: I used “Loading…” messages to improve the UX.

