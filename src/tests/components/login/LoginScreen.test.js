import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types";


describe('test on <LoginScreen/>', () => {
    const contextValue = {
        dispatch: jest.fn()
    }
    const historyMock = {
        replace: jest.fn()
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen
                history = {historyMock}
            />
        </AuthContext.Provider>   
    )
    
    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('should call dispatch and navagation', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name: 'smog'
            }
        });
        expect( historyMock.replace ).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/marvel');
        handleClick();
        expect( historyMock.replace ).toHaveBeenCalledWith('/marvel');
    })
    
    
})
