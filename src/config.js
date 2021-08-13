import { models } from 'powerbi-client';

export const GENERAL_CONFIG = {
  id: '7b6f53a5-08d8-4831-8454-916dc30b1b5c',
  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=7b6f53a5-08d8-4831-8454-916dc30b1b5c&groupId=e1d73cb6-2751-4844-b4ad-4dbbc4a4121e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d', 
  tokenType: models.TokenType.Embed,
  pageView: 'fitToWidth',           
  pageName: 'ReportSection',        
  settings: {                     
    panes: {
      filters: {
        expanded: true,
        visible: false
      },
      pageNavigation: {
        visible: false,
      }
    },              
  }
}

export const VISUAL_LIST = [
  {
    "name": "9a5aae211c43f39587bd",
    "title": "Units Sold",
  },
  {
    "name": "33669fccaddf1e7ae763",
    "title": "Units Sold theo  Manufacturing Price",
  },
  {name: "6a3c0b19a5c7776c422b", title: "Units Sold theo  Product "},
  {
    "name": "47e86d032d7c25ff8eb5",
    "title": "Units Sold theo  Discount Band ",
  },
  {
    "name": "efed7f1d526c66aa634b",
    "title": "Month Number",
  },
  {
    name: "b4e7e141b73e503aca40", title: "Month Number theo  Discount Band",
  },
  {
    name: '4bb3beee32ef32fbfa56', title: "Month Number theo  Product",
  },
  {
    name: 'f4813a40f45a243b8358', title: 'Month Number theo  Manufacturing Price'
  }
]