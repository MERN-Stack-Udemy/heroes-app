import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"


describe('test on <Navbar/> component', () => {
    
    const historyMock = {
        push: jest.fn(),
        location:{},
        replace:jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'smog'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(() => {
        jest.clearAllMocks();
    } )

    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toEqual( contextValue.user.name);
    })

    test('should be call logout and useHistory', () => {
        wrapper.find('button').prop('onClick')();
        expect( contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
        expect( historyMock.replace ).toHaveBeenCalledWith('/login' )
    })
    
    
})
