import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { HeroScreen } from '../../../components/heroes/HeroScreen'

describe('test on <HeroScreen/>', () => {
    
    const historyMock = {
        length:10,
        goBack: jest.fn(),
        push: jest.fn()
    };
    
    test('should display the <Redirect/> component if don`t have arguments in URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });
    
    test('should display a hero if paramether exists and finded', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route 
                    path="/hero/:heroId"
                    component={ HeroScreen }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists() ).toBe(true);
        expect( wrapper.find('h3').text().trim().length > 0 ).toBe(true)
    })
    
    test('should return to last screen with PUSH', () => {
        const historyMock = {
            length:1,
            goBack: jest.fn(),
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ historyMock }/> }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect( historyMock.push ).toHaveBeenCalledTimes(1);
        expect( historyMock.push ).toHaveBeenCalledWith('/');
        expect( historyMock.goBack ).not.toHaveBeenCalled();
    })
    
    test('should return to last screen with GoBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ historyMock }/> }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect( historyMock.push ).not.toHaveBeenCalled();
        expect( historyMock.goBack ).toHaveBeenCalledTimes(1);
    })
    
    test('should call Redirect if the hero not exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk88888']}>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ historyMock }/> }
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('')
    })
    
})
