import connection from '../../database/connection';
import request from 'supertest'
import {app} from '../../server'


describe('Testes Gerais do Sistema (Simplificado)', () => {
    
        beforeAll(async ()=>{
        await connection.create();
        })

         afterAll(async ()=>{
            //  await connection.clear()
             await connection.close();
         })

       it('Criação de Usuário', async () => {
            const rndInt = Math.floor(Math.random() * 80) + 1
            const data = {username: "UserTest"+rndInt, name: "Usuário de Teste "}
            const response = await request(app)
            .post('/user/create')
            .send(data)
            expect(response.statusCode).toBe(201);    
     
        });    
      

        it('Criação de Post', async () => {
            const data = {post_text: "Teste de criação de post no projeto", user_id: "6e653643-913d-427b-ae3c-dc9d9cdd11c1"}
            const response = await request(app)
            .post('/post/create')
            .send(data)
            
            expect(response.statusCode).toBe(201);
          });


        it('Like do Post', async () => {
            const data = {post_id:"41aba772-24db-431a-86ab-830f45fdaf44", user_id: "6e653643-913d-427b-ae3c-dc9d9cdd11c1"}
            const response = await request(app)
            .post('/upvotepost')
            .send(data)
            expect(response.statusCode).toBe(200);
          });



        it('Busca de Posts Criados', async () => {
            const response = await request(app)
            .get('/post/all')
            expect(response.statusCode).toBe(200);
          });

      


     

    });
