/**
 * Entry file per inizializzare api web socket
 */
import { io, Socket } from 'socket.io-client';

//Canale usato per mandare le richieste al server
const CANALE_SCAMBIO = 'ws_server';

let socket: Socket = undefined;

/**
 * Inizializza il socket, chiamato al avvio del app
 * @param url
 */
export async function initWebSocket(url: string): Promise<Boolean> {
  return new Promise(function (resolve, reject) {
    socket = io(url);
    //Verifico il collegamento con il server
    socket.on('connect', () => {
      resolve(true);
    });
    socket.on('connect_error', () => {
      console.log('Errore connessione al server');
      resolve(false);
    });
  });
}

/**
 * Aggiunge il listener per evento
 * @param event
 * @param cb
 */
function onEvent(event: string, cb: any) {
  socket.on(event, cb);
}
/**
 * Aggiunge il listener per evento per una volta sola
 * @param event
 * @param cb
 */
function onEventOnce(event: string, cb: any) {
  socket.once(event, cb);
}
/**
 * Toglie il listener indicato dal evento
 * @param event
 * @param cb
 */
function offListener(event: string, cb: any) {
  socket.off(event, cb);
}
/**
 * Toglie tutti i listener del evento
 * @param event
 */
function offAllListeners(event: string) {
  socket.removeAllListeners(event);
}

/**
 * Manda la richeista al server
 * @param payload
 */
function emitEvent(nome: string, payload: object) {
  let json = JSON.stringify(payload);
  socket.emit(nome, json);
}

/**
 * Crea promise per la riceposta del evento websocket
 * @param payload
 * @returns
 */
function eseguiRichiesta(payload: { action: string }) {
  return new Promise(function (resolve, reject) {
    //Faccio la richeista al server
    sendToServer(payload);
    //creo il nome del evento su cui ascoltare al risposta uguale al campo action
    MyWebsocket.onEventOnce(payload.action, (response: string) => {
      //quando ricevo evento della risposta risolvo il promise
      resolve(response);
    });
  });
}

/**
 * Metodo usato per richiedere dati al servere tramite campo action del paylaod
 * @param payload
 */
function sendToServer(payload: { action: string }) {
  emitEvent(CANALE_SCAMBIO, payload);
}

export const MyWebsocket = {
  sendToServer,
  eseguiRichiesta,
  emitEvent,
  onEvent,
  onEventOnce,
  offListener,
  offAllListeners,
};
