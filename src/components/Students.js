import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const data = [
  {
    key: '1',
    name: 'Benni',
    nim: 2001558126,
    jabatan: 'Koordinator Bidang 1'
  },
  {
    key: '2',
    name: 'Loka',
    nim: 2001558126,
    jabatan: 'Koordinator Bidang 2'
  },
  {
    key: '3',
    name: 'Novel',
    nim: 2001558126,
    jabatan: 'Koordinator Bidang 3'
  },
  {
    key: '4',
    name: 'Theressa',
    nim: 2001558126,
    jabatan: 'Koordinator Bidang 4'
  }
];

class Students extends Component {
  render() {
    return (
      <div>
        <Table
          columns={[
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'NIM', dataIndex: 'nim', key: 'nim' },
            { title: 'Role', dataIndex: 'jabatan', key: 'jabatan' },
            { title: '', dataIndex: 'jabatan', key: 'detail' },
            { title: '', dataIndex: 'jabatan', key: 'edit' },
            { title: '', dataIndex: 'jabatan', key: 'delete' },
          ]}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Students;
