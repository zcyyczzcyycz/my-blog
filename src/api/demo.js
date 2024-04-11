import request from '@/utils/axios'

//管理员

export default {
  //列表
  list(data) {
    return request({
      url: '/admin/admin',
      method: 'post',
      data
    })
  },
  //新增
  create(data) {
    return request({
      url: '/admin/admin/create',
      method: 'post',
      data
    })
  },
  //详情
  detail(data) {
    return request({
      url: '/admin/admin/detail',
      method: 'post',
      data
    })
  },
  //更新
  modify(data) {
    return request({
      url: '/admin/admin/modify',
      method: 'post',
      data
    })
  },
  //删除
  del(data) {
    return request({
      url: '/admin/admin/delete',
      method: 'post',
      data
    })
  },

}
