import { Immutable } from '../utils/types';

const paths = {
  Base: '/api',
  DataIO: {
    Base: '/dataio',
    CreateRecord: {
      Post: '/createRecord',
    },
    PatchRecord: {
      Post: '/patchRecord',
    },
    SearchRecords: {
      Post: '/searchRecords',
    },
    GetTypeNames: {
      Post: '/getTypeNames',
    },
    GetTypeDefinitions: {
      Post: '/getTypeDefinitions',
    },
    GetAllRecords: {
      Get: '/getAllRecords',
    }
  },
  CRM: {
    Base: '/crm',
    CreateRecord: {
      Post: '/createRecord',
    },
    PatchRecord: {
      Post: '/patchRecord',
    },
    SearchRecords: {
      Post: '/searchRecords',
    },
    GetTypeNames: {
      Post: '/getTypeNames',
    },
    GetTypeDefinitions: {
      Post: '/getTypeDefinitions',
    },
    GetAllRecords: {
      Get: '/getAllRecords',
    }
  },
  Model: {
    Base: '/model',
    CreateModel: {
      Post: '/save-model',
    }    
  },
  Auth: {
    Base: '/oauth',
    Authorize: {
      Get: '/authorize',
    },
    Token: {
      Post: '/token',
    },
    UserInfo: {
      Get: '/userinfo',
    }    
  },
};

export type TPaths = Immutable<typeof paths>;
export default paths as TPaths;
