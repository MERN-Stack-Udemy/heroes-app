import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routers/AppRouter"

describe('test on <AppRouter/>', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }

    test('should display <Login/> component if don\'t be autenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        )
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should display <Marvel/> component if autenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged:true,
                name:'smog'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        )
        expect( wrapper.find('nav').exists() ).toBe( true );
    })
})
