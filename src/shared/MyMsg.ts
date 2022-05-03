/**
 * Wrapper per mostrare i messaggi
 */
import { ElMessage } from 'element-plus';

const default_error_msg = 'Someting bad happen...';
const default_msg = 'Default message';

function showMsg(msg: string = default_msg) {
  ElMessage({
    message: msg,
    type: 'info',
  });
}
function showSucessMsg(msg: string = default_msg) {
  ElMessage({
    message: msg,
    type: 'success',
  });
}
function showWarningMsg(msg: string = default_msg) {
  ElMessage({
    message: msg,
    type: 'warning',
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
