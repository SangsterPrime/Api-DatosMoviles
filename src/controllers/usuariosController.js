import * as repo from "../repositories/usuariosRepository.js";

export async function list(req, res, next) {
  try { const data = await repo.list(); res.json(data); } catch (e) { next(e); }
}
export async function get(req, res, next) {
  try { const item = await repo.getById(req.params.id); if (!item) return res.status(404).json({ error: 'usuarios not found' }); res.json(item); } catch (e) { next(e); }
}
export async function create(req, res, next) {
  try { const created = await repo.create(req.body); res.status(201).json(created); } catch (e) { next(e); }
}
export async function update(req, res, next) {
  try { const updated = await repo.update(req.params.id, req.body); if (!updated) return res.status(404).json({ error: 'usuarios not found' }); res.json(updated); } catch (e) { next(e); }
}
export async function remove(req, res, next) {
  try { await repo.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
}

export async function getUserByUsername(req, res, next) {
  try {
    const data = await repo.getUserByUsername(req.params.username, req.body);
    res.json(data);
  } catch (e) {next(e);}
}

export default { list, get, create, update, remove };
