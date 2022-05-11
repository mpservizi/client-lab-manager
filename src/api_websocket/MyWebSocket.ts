import { io, Socket } from 'socket.io-client';

//Canale usato per mandare le richieste al server
const CANALE_SCAMBIO = 'ws_server';

let socket: Socket = undefined;

/**
 * Inizializza il socket
 * @param url
 */
async function init(url: string) {
  return new Promise(function (resolve, reject) {
    socket = io(url);
    socket.on(CANALE_SCAMBIO, _handleRisposta);
    //Verifico il collegamento con il server
    socket.on('connect', () => {
      resolve(true);
    });
    socket.on('connect_error', () => {
      reject('Errore connessione al server');
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
function offEventListener(event: string, cb: any) {
  socket.off(event, cb);
}
/**
 * Toglie tutti i listener del evento
 * @param event
 */
function offAllEventListeners(event: string) {
  socket.removeAllListeners(event);
}

/**
 * Manda la richeista al server
 * @param payload
 */
function sendToServer(payload: object) {
  _emitEvent(CANALE_SCAMBIO, payload);
}

// Wrapper per mandare eventoa al server
function _emitEvent(nome: string, payload: object) {
  let json = JSON.stringify(payload);
  socket.emit(nome, json);
}

//Default handler per risposta
function _handleRisposta(json: string) {
  console.log(json);
}

function eseguiRichiesta() {}

export const MyWebsocket = {
  init,
  sendToServer,
  onEvent,
  onEventOnce,
  offAllEventListeners,
  offEventListener,
};
