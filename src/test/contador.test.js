import Contador from '../components/contador';
import { configure, shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
//Cristian Medina 1824150
configure({
    adapter: new adapter()
});

describe('Prueba de botones',()=>{
    const wrapper = shallow(<Contador name="Cristian" inicial={2} />);
    const text = () => wrapper.find('p').text().trim();
    const click = (numB) => wrapper.find('button').at(numB).simulate('click');
 
    test('Simular click botón sumar',() => {
        click(0);
        expect(text()).toMatch('3');
      })
    test('Simular click botón restar',() => {
        click(1);
        expect(text()).toMatch('2');
      })
    test('Simular click botón resetaurar',() => {
        click(2);
        expect(text()).toMatch('2');
      })
})

//Prueba  de botones número al azar
/* describe('Prueba botones',()=>{
    let randomInt = Math.floor(Math.random() * (100 - -100)) + -100;
    const wrapper = shallow(<Contador name="Cristian" inicial={randomInt} />);
    const click = (numB) => wrapper.find('button').at(numB).simulate('click');
    const text = () => parseInt(wrapper.find('p').text().trim());
 
    test('Simular click boton suma',() => {
        click(0);
        randomInt++;
        expect(text()).toBe(randomInt);
      })
    test('Simular click boton resta',() => {
        click(1);
        randomInt--;
        expect(text()).toBe(randomInt);
      })
    test('Simular click boton reset',() => {
        click(2);
        expect(text()).toBe(randomInt);
      })
}) */