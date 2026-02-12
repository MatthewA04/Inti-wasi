import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo,
} from "react";

const initialState = {
  step: 1,
  formData: {
    experiencia: "",
    personas: "",
    fecha: "",
    hora: "",
    cliente: {
      nombres: "",
      apellidos: "",
      ocasion: "",
      correo: "",
      celular: "",
      tipoDocumento: "DNI",
      numeroDocumento: "",
      requerimientos: "",
      alergias: "",
    },
  },
};

function reservaReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "UPDATE_FORM":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "RESET_FORM":
      return {
        ...initialState,
        step: 1,
      };
    case "UPDATE_CLIENTE":
      return {
        ...state,
        formData: {
          ...state.formData,
          cliente: { ...state.formData.cliente, ...action.payload },
        },
      };
    default:
      return state;
  }
}

const ReservaContext = createContext();

export function ReservaProvider({ children }) {
  const [state, dispatch] = useReducer(reservaReducer, initialState);

  const nextStep = useCallback(() => dispatch({ type: "NEXT_STEP" }), []);
  const prevStep = useCallback(() => dispatch({ type: "PREV_STEP" }), []);
  const setStep = useCallback(
    (step) => dispatch({ type: "SET_STEP", payload: step }),
    [],
  );
  const updateForm = useCallback(
    (data) => dispatch({ type: "UPDATE_FORM", payload: data }),
    [],
  );
  const updateCliente = useCallback(
    (data) => dispatch({ type: "UPDATE_CLIENTE", payload: data }),
    [],
  );

  const resetReserva = useCallback(() => dispatch({ type: "RESET_FORM" }), []);

  const value = useMemo(
    () => ({
      state,
      nextStep,
      prevStep,
      setStep,
      updateForm,
      updateCliente,
      resetReserva,
    }),
    [
      state,
      nextStep,
      prevStep,
      setStep,
      updateForm,
      updateCliente,
      resetReserva,
    ],
  );

  return (
    <ReservaContext.Provider value={value}>{children}</ReservaContext.Provider>
  );
}

export const useReserva = () => useContext(ReservaContext);
