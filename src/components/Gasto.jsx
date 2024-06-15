// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions
} from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from "../helpers";
import InconoAhorro from '../img/icono_ahorro.svg'
import InconoCasa from '../img/icono_casa.svg'
import InconoComida from '../img/icono_comida.svg'
import InconoOcio from '../img/icono_ocio.svg'
import InconoSalud from '../img/icono_salud.svg'
import InconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoGastos from '../img/icono_gastos.svg'

const diccionarioIconos = {
  ahorro: InconoAhorro,
  comida: InconoComida,
  casa: InconoCasa,
  ocio: InconoOcio,
  salud: InconoSalud,
  suscripciones: InconoSuscripciones,
  gastos: IconoGastos
}

// eslint-disable-next-line react/prop-types
const Gasto = ({ gasto, setGastoEditar, eliminarGasto}) => {
  // eslint-disable-next-line react/prop-types
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>  
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => eliminarGasto(id)}
        destructive = {true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions = {leadingActions()}
        trailingActions = {trailingActions()}
      >
          <div className="gasto sombra">
            <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Icono gasto" />
              <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">
                  {" "}
                  Agregado en {""}
                  <span>{formatearFecha(fecha)}</span>
                </p>
              </div>
            </div>
              <p className="cantidad-gasto">${cantidad}</p>
          </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
