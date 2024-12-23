import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCChatComponent, ConversationPromptSettings, ConversationUserSettings, ChatRole, AudioSpeed } from '@dataclouder/conversation-system';

@Component({
  selector: 'app-conversation-card-chat',
  standalone: true,
  imports: [CommonModule, DCChatComponent],
  templateUrl: './conversation-card-chat.component.html',
  styleUrls: ['./conversation-card-chat.component.scss'],
})
export class ConversationCardChatComponent implements OnInit {
  public ConversationPromptSettings: ConversationPromptSettings = {
    messages: [{ text: 'you are having a conversation with?', content: 'bot', role: ChatRole.System }],
  };
  public conversationUserSettings: ConversationUserSettings = {
    realTime: false,
    repeatRecording: false,
    fixGrammar: false,
    superHearing: false,
    voice: 'en-US',
    autoTranslate: false,
    synthVoice: false,
    highlightWords: false,
    speedRate: 1,
    modelName: '',
    provider: '',
    speed: AudioSpeed.Regular,
  };
  ngOnInit(): void {
    debugger;
  }
  // Add your component logic here
}
