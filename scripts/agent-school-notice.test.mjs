// Run: node --test scripts/agent-school-notice.test.mjs
// Source checks complement, but do not replace, a build and browser verification.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const html = read('index.html');
const css = read('src/agent-school-notice.css');
const notice = html.match(/<section id="agent-school-notice"[\s\S]*?<\/section>/)?.[0] ?? '';

test('the notice appears before the original app without requiring JavaScript', () => {
  assert.ok(notice);
  assert.ok(html.indexOf(notice) > html.indexOf('<main id="main-content">'));
  assert.ok(html.indexOf(notice) < html.indexOf('<div id="app"></div>'));
  assert.doesNotMatch(notice, /<script|<dialog|autofocus|\bhidden\b(?!="true")/);
  assert.match(html, /<link rel="stylesheet" href="\/src\/agent-school-notice\.css">/);
});

test('free practice and paid progression are clearly distinguished', () => {
  assert.match(notice, /免費入門[\s\S]*?親手做出自己的 Agent/);
  assert.match(notice, /付費進階[\s\S]*?打穩基礎、持續擴充功能，以獨立開發為目標/);
  assert.match(notice, /課程內容陸續更新/);
  assert.match(notice, /2026 年 11 月前/);
  assert.match(notice, /早期優惠價/);
});

test('the new school has a safe external link and the learning app remains reachable', () => {
  assert.match(notice, /href="https:\/\/agentschool\.lifecheatslab\.com\/zh" target="_blank" rel="noopener noreferrer"/);
  assert.match(notice, /（另開分頁）/);
  assert.match(notice, /href="#app"/);
  assert.doesNotMatch(notice, /<(?:form|input|iframe)\b|http-equiv="refresh"/);
});

test('existing learning hooks and the original app entry point are retained', () => {
  for (const id of ['sidebar', 'sidebar-nav', 'theme-toggle', 'learning-timer', 'progress-summary', 'app', 'members-panel', 'mobile-nav-toggle']) {
    assert.equal([...html.matchAll(new RegExp(`id="${id}"`, 'g'))].length, 1, id);
  }
  assert.match(html, /<script type="module" src="\/src\/main\.ts"><\/script>/);
  assert.doesNotMatch(html, /已停止索取|不再開放報名/);
});

test('the notice has an accessible heading, keyboard focus, themes and mobile layout', () => {
  assert.match(notice, /aria-labelledby="agent-school-title"/);
  assert.match(notice, /<h2 id="agent-school-title">/);
  assert.match(css, /\[data-theme="light"\] \.agent-school-notice/);
  assert.match(css, /a:focus-visible/);
  assert.match(css, /@media \(max-width: 540px\)/);
  assert.match(css, /min-height: 44px/);
});
