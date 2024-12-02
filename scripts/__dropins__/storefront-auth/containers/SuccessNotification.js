import{jsxs as a,jsx as o,Fragment as r}from"@dropins/tools/preact-jsx-runtime.js";import{classes as u,Slot as m}from"@dropins/tools/lib.js";/* empty css                               */import{Button as s}from"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{r as f}from"../chunks/revokeCustomerToken.js";import{useText as d}from"@dropins/tools/i18n.js";import"../chunks/network-error.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getStoreConfig.js";const h=({formSize:n="default",className:e="",slots:t,labels:i})=>{const c=d({headingText:"Auth.SuccessNotification.headingText",messageText:"Auth.SuccessNotification.messageText",primaryButtonText:"Auth.SuccessNotification.primaryButtonText",secondaryButtonText:"Auth.SuccessNotification.secondaryButtonText"});return a("div",{className:u(["auth-success-notification-form",`auth-success-notification-form--${n}`,e]),children:[o("p",{className:"auth-success-notification-form__title","data-testid":"notification-title",children:(i==null?void 0:i.headingText)||c.headingText}),o("p",{className:"auth-success-notification-form__content-text","data-testid":"notification-content",children:(i==null?void 0:i.messageText)||c.messageText}),t!=null&&t.SuccessNotificationActions?o(m,{"data-testid":"successNotificationActions",name:"SuccessNotificationActions",slot:t==null?void 0:t.SuccessNotificationActions,context:{}}):a(r,{children:[o(s,{"data-testid":"primaryButton",type:"button",className:"auth-success-notification-form__button auth-success-notification-form__button--top",onClick:()=>window.location.href="/",children:c.primaryButtonText}),o(s,{"data-testid":"secondaryButton",type:"button",variant:"tertiary",onClick:async()=>{await f(),window.location.href="/"},children:c.secondaryButtonText})]})]})},k=({formSize:n="default",slots:e,className:t,labels:i})=>o("div",{className:"auth-success-notification",children:o(h,{formSize:n,className:t,slots:e,labels:i})});export{k as SuccessNotification,k as default};
