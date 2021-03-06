import { observable, action } from 'mobx';
import axios from 'axios';
import shuffle from 'lodash/shuffle';

export default class DesignListModel {
  @observable designList = [];

  @action
  getDesignList(cb, err) {
    axios
      .get('/media/data/ui.json')
      .then(({ data }) => {
        this.designList = shuffle(data.data || []);
        cb && cb(data.data);
      })
      .catch(er => {
        err && err(er);
      });
  }
}
