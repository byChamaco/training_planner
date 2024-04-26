import { createRouter, defineEventHandler, useBase } from 'h3';
import * as userCtrl from '../controller/user';

const router = createRouter()

router.get('/user/get', defineEventHandler(userCtrl.read))
router.post('/user/search', defineEventHandler(userCtrl.search))
router.post('/user/search_email', defineEventHandler(userCtrl.search_email))
router.post('/user/:id/update', defineEventHandler(userCtrl.update))

export default useBase('/api', router.handler)