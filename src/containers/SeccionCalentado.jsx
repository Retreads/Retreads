import React from 'react';
import '../styles/Container.css'
import Item1CalentaoValluno from '../components/Item1CalentaoValluno';
import Item2CalentaoCachaco from '../components/Item2CalentaoCachaco';
import Item3CalentaoPaisa from '../components/Item3CalentaoPaisa';

const SeccionCalentado = () => {
    return (
        <div className='cont-calentado'>
            <div>
                <h4>Calentao's</h4>
            </div>
            <div className='item-calentado'>
                <Item1CalentaoValluno />
                <Item2CalentaoCachaco />
                <Item3CalentaoPaisa />

            </div>

        </div>
    );
}

export default SeccionCalentado;