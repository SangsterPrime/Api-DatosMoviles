import { Router } from "express";
import users from "./users.js";
import clientesRouter from "./clientes.js";
import comprasRouter from "./compras.js";
import detalle_comprasRouter from "./detalle_compras.js";
import detalle_ventasRouter from "./detalle_ventas.js";
import movimientos_stockRouter from "./movimientos_stock.js";
import productosRouter from "./productos.js";
import proveedoresRouter from "./proveedores.js";
import usuariosRouter from "./usuarios.js";
import ventasRouter from "./ventas.js";

const router = Router();

router.use("/users", users);

router.use("/clientes", clientesRouter);
router.use("/compras", comprasRouter);
router.use("/detalle_compras", detalle_comprasRouter);
router.use("/detalle_ventas", detalle_ventasRouter);
router.use("/movimientos_stock", movimientos_stockRouter);
router.use("/productos", productosRouter);
router.use("/proveedores", proveedoresRouter);
router.use("/usuarios", usuariosRouter);
router.use("/ventas", ventasRouter);
export default router;
