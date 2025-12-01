import * as repo from "../repositories/userRepository.js";

export async function list(req, res, next) {
  try {
    const data = await repo.listUsers();
    res.json(data);
  } catch (e) { next(e); }
}

export async function get(req, res, next) {
  try {
    const data = await repo.getUserById(req.params.id);
    res.json(data);
  } catch (e) { next(e); }
}

export async function create(req, res, next) {
  try {
    const data = await repo.createUser(req.body);
    res.status(201).json(data);
  } catch (e) { next(e); }
}

export async function update(req, res, next) {
  try {
    const data = await repo.updateUser(req.params.id, req.body);
    res.json(data);
  } catch (e) { next(e); }
}

export async function remove(req, res, next) {
  try {
    await repo.deleteUser(req.params.id);
    res.status(204).end();
  } catch (e) { next(e); }
}

export async function getUserByUsername(req, res, next) {
  try {
    const data = await repo.getUserByUsername(req.params.username, req.body);
    res.json(data);
  } catch (e) {next(e);}
}

export default { list, get, create, update, remove };
