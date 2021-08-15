import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";


describe('test on <SearchScreen/> component', () => {
    
    const historyMock = {
        push: jest.fn()
    };

    test('should display correctly with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim()).toBe('Search some Hero');
    });

    test('should display Batman and input have a value from queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should display error message if hero not find', () => {
        const heroSearch = 'batmanjsjdls'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${heroSearch}`]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text()).toBe(`There is no a hero with: '${ heroSearch }'.`);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should call history of history', () => {
        const historyMock = {
            push: jest.fn()
        };
        const heroSearch = 'batman';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${heroSearch}`]}>
                <Route 
                    path="/search" 
                    component={() => <SearchScreen history={historyMock} /> } 
                />
            </MemoryRouter>
        );
        // simulate changes into input
        wrapper.find('input').simulate('change', {
            target:{
                name: 'searchText',
                value: heroSearch
            }
        });
        //make form submit
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( historyMock.push ).toHaveBeenCalledWith(`?q=${ heroSearch }`);
    })
    

})
