export type Usuario = {
    nombre: string
    edad: number
}
export function mostrarUsuario(user: Usuario): string{
    return `Usuario: ${user.nombre}, Edad: ${user.edad}`
}