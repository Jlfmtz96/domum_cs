import { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import './form.css'

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setOpen(true)}
        className="border p-4 text-xl"
      >
        Registrate
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 mt-4">
          <h2 className="text-4xl font-bold mb-6 text-center text-black">¡Pronto revelaremos el secreto mejor guardado de Querétaro! </h2>
          <p className="text-2xl font-bold mb-12 text-center text-black">¿Estás listo para ser parte de algo extraordinario?</p>
          <form action="/submit_form" method="post">
              <div className="mb-12 custom-border">
                  {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
                  <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border-l-2 border-r-2 border-gray-300 focus:outline-none focus:ring-2" placeholder="Nombre..." required />
                  <div className="left-top"></div>
                  <div className="right-bottom"></div>
              </div>
              <div className="mb-12 custom-border">
                  {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
                  <input type="text" id="apellidos" name="apellidos" className="w-full px-3 py-2 border-l-2 border-r-2 border-gray-300 focus:outline-none focus:ring-2" placeholder="Apellidos..." required />
                  <div className="left-top"></div>
                  <div className="right-bottom"></div>
              </div>
              <div className="mb-12 custom-border">
                  {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
                  <input type="email" id="correo" name="correo" className="w-full px-3 py-2 border-l-2 border-r-2 border-gray-300 focus:outline-none focus:ring-2" placeholder="Correo electrónico..." required />
                  <div className="left-top"></div>
                  <div className="right-bottom"></div>
              </div>
              <div className="mb-12 custom-border">
                  {/* <label className="block text-gray-700 font-bold mb-2">Nombre:</label> */}
                  <input type="tel" id="telefono" name="telefono" className="w-full px-3 py-2 border-l-2 border-r-2 border-gray-300 focus:outline-none focus:ring-2" placeholder="Teléfono..." required />
                  <div className="left-top"></div>
                  <div className="right-bottom"></div>
              </div>
              <div>
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar Datos</button>
              </div>
          </form>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};