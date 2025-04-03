import { Prisma } from "@prisma/client"
import { prisma } from "../libs/prisma"

/*Função para criar um usuário, aqui eu estou passando um objeto 
com os dados do usuário que será criado.*/
export const createUser = async(data: Prisma.UserCreateInput) => {
    const user = await prisma.user.create({
        data,
    })
    return user
}

export const createUsers = async(users: Prisma.UserCreateInput[]) => {
    return await prisma.user.createMany({
        data: users,
        skipDuplicates: true,
    })
}

/*Função para ler os usuarios. Aqui voçê pode escolher o que deseja retornar, se quiser retornar 
todos os dados do usuário, basta retornar o objeto user.*/
export const readUser = async() => {
    const user = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email: true,
            roles: true,
        }
    })
    return user
}
/*Função para ler os usuarios específicos. Aqui eu estou filtrando apenas os 
usuários que possuem o email com o final gmail.com.*/
export const readUsers = async() => {
    const user = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "gmail.com"
            }
        }
    })
    return user
}

/*Função para atualizar o usuário, aqui eu estou atualizando todos os usuários 
que possuem o email com o final gmail.com e atribuindo o valor "USER" na coluna roles.*/
export const updateUsers = async() => {
    const user = await prisma.user.updateMany({
        where: {
            email: {
                endsWith: "gmail.com"
            }
        },
        data: {
            roles: "ADMIN",
        }
    })
    return user
}

/*Função para deletar o usuário, aqui eu estou deletando 
todos os usuários com o email com o final gmail.com.*/
export const deleteUser = async() => {
    const user = await prisma.user.deleteMany({
        where: {
            email: {
                endsWith: "gmail.com"
            }
        }
    })
    return user
}