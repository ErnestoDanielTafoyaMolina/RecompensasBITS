export const querys ={

    getUserById:"SELECT * FROM Usuarios WHERE Id_usuario=@Id_usuario",
    getUserRol:"SELECT ROL FROM Usuarios WHERE Id_usuario=@Id_usuario",
    getTotalUsers:"SELECT COUNT(*) FROM BITS_Recompensas.dbo.Usuarios",
    
}