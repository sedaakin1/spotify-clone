export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 
    // "BQDEDO_WbayQ6vB3EUTRPkP2rIJrNgeyF0xNE90EUZeG2gu6P8h1J4qq4bGlsoGktsEKIR9uhOz3PcmkJfZmuF-A8OpJWBIryVHO34OQ9TlboRrq3dZteP2Cd88s-NfqyU2QmVz9o0w4T-pYuzfhEH2xY3_L8B-dxNT6dkFX_PT3IUp64nlPiw",
    
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]


  switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };

    case 'SET_TOKEN':
      return {
     ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
     ...state,
        playlists: action.playlists,
      };

      case 'SET_DISCOVER_WEEKLY':
      return {
     ...state,
      discover_weekly: action.discover_weekly,
      };


    default:
        return state;
  }
}

export default reducer;

