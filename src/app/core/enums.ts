export enum RouteNames {
  Page = 'page',
  Home = 'home',
  Profile = 'profile',
  SubscriptionPlan = 'plan',
  Words = 'my-words',
  Phrases = 'my-phrases',
  Verbs = 'my-verbs',
  Chat = 'my-chat',
  Scenarios = 'escenarios',
  Topics = 'topics',
  Lessons = 'lecciones',
  Info = 'informacion',
  // TODO quiza debo quitar CreateLesson de aquí
  CreateLesson = 'create-lesson',
  Admin = 'admin',
  Teacher = 'teacher',
  VoiceDictation = 'dictado',
  Discovery = 'ejemplos',
  Signup = 'signup',
  Signin = 'signin',
  Terms = 'terms',
  Main = 'main',
  Auth = 'auth',
  Stack = 'stack',
  ConversationDetails = 'conversation-details',
}

export const Endpoints = {
  GetUser: 'api/user',
  PostUser: 'api/user',
  AdminUser: 'api/admin/user',
  Admin: {
    Claims: 'api/admin/claims', // :email
  },
  ConversationCard: {
    TranslateConversation: 'api/conversation_card/translate',
  },

  Lessons: {
    Lesson: 'api/lessonv2',
    QueryLessons: 'api/lessonv2/query',
  },
};

export enum AppHttpCode {
  GoodRefreshToken = 211,
  ErrorRefreshToken = 411,
}
