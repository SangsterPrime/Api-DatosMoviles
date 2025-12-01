    import sql from "../config/db.js";

     const TABLE = 'usuarios';
     const PK = 'id';

     export async function list() {
       const rows = await sql`select * from ${ sql(TABLE) }`;
       return rows;
     }

     export async function getById(id) {
       const rows = await sql`select * from ${ sql(TABLE) } where ${ sql(PK) } = ${ id }`;
       return rows[0] || null;
     }

     export async function create(payload) {
       const rows = await sql`insert into ${ sql(TABLE) } ${ sql(payload) } returning *`;
       return rows[0];
     }

     export async function update(id, payload) {
       // CORREGIDO: Usar sql(TABLE) en lugar de "${TABLE}"
       const rows = await sql`update ${ sql(TABLE) } set ${ sql(payload) } where ${ sql(PK) } = ${ id } returning *`;
       return rows[0];
     }

     export async function remove(id) {
       // CORREGIDO: Usar sql(TABLE) en lugar de "${TABLE}"
       await sql`delete from ${ sql(TABLE) } where ${ sql(PK) } = ${ id }`;
       return { id };
     }

     export async function getUserByUsername(username) {
        const rows = await sql`select * from ${ sql(TABLE) } where nombre = ${username}`;
        return rows[0] || null;
     }

     export default { list, getById, create, update, remove, getUserByUsername };
