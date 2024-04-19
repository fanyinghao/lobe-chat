'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useEffect } from 'react';

import { messageService } from '@/services/message';
import { sessionService } from '@/services/session';
import { useGlobalStore } from '@/store/global';

const checkHasConversation = async () => {
  const hasMessages = await messageService.hasMessages();
  const hasAgents = await sessionService.countSessions();
  return hasMessages || hasAgents === 0;
};

const Redirect = memo(() => {
  const router = useRouter();

  // get settings str from query
  const searchParams = useSearchParams();
  const settings = searchParams.get('settings');
  const [setConfig] = useGlobalStore((s) => [s.setModelProviderConfig]);

  useEffect(() => {
    checkHasConversation().then((hasData) => {
      if (hasData) {
        router.replace('/chat');
      } else {
        router.replace('/welcome');
      }
    });
  }, []);

  useEffect(() => {
    if (settings) {
      try {
        const json = JSON.parse(settings);
        const { openAI } = json;
        setTimeout(() => {
          if (openAI) setConfig('openai', openAI);
        }, 5000);
      } catch (e) {
        console.error(e);
      }
    }
  }, [settings]);

  return null;
});

export default Redirect;
