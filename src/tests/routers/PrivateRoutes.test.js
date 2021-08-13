import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoutes } from "../../routers/PrivateRoutes"


describe('test on PrivateRoutes', () => {

    const props = {
        location:{
            pathname:'/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should to display component if is autenticated and save to localstorage ', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={true}
                    component={()=><span>Hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect( wrapper.find('span').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 1 );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' );
    })
    
    test('should lock component if not autenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={false}
                    component={()=><span>Hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect( wrapper.find('span').exists() ).toBe( false );
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 1 );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' );
    })
    

})
