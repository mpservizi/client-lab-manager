/**
 * Wrapper per mostrare i messaggi
 */
import { ElMessage } from 'element-plus';

const default_error_msg = 'Someting bad happen...';
const default_msg = 'Default message';

function showMsg(msg: string = default_msg, durata: number = 3000) {
  ElMessage({
    message: msg,
    type: 'info',
    duration: durata,
  });
}
function showSucessMsg(msg: string = default_msg, durata: number = 3000) {
  ElMessage({
    message: msg,
    type: 'success',
    duration: durata,
  });
}
function showWarningMsg(msg: string = default_msg, durata: number = 3000) {
  ElMessage({
    message: msg,
    type: 'warning',
    duration: durata,
  });
}
function showErrorMsg(msg: string = default_error_msg) {
  ElMessage.error(msg);
}

export const MyMsg = {
  showErrorMsg,
  showMsg,
  showSucessMsg,
  showWarningMsg,
};
