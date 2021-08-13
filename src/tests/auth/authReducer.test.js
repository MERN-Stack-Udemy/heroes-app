import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('test on authReducer', () => {
    
    test('should return default state', () => {
        const state = authReducer({logged:false}, {})
        expect( state ).toEqual( {logged:false} );
    })

    test('should autenticate and put user name', () => {
        const name = 'smog';
        const action = {
            type: types.login,
            payload:{
                name
            }
        }
        const state = authReducer({logged:false}, action)
        expect( state ).toEqual({
            logged:true,
            name
        });
    })
    
    test('should logout and delete user', () => {
        const name = 'smog';
        const action = {
            type: types.logout
        }
        const state = authReducer({logged:true, name: 'smog'}, action)
        expect( state ).toEqual({ logged:false });
    })
})
