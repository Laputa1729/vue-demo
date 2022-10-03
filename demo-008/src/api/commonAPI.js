// 公用接口

import axios from 'axios';
// 向外按需导出一个 API
export const getArticleListAPI = function (_page, _length) {
    return axios.get('/articles', {
        params: {
            _page: _page,
            _limit: _length,
        },
    });
};
