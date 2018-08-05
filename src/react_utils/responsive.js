import React from "react";

function isMediaEnabled() {
  return window && window.matchMedia;
}

export function Mobile({ children }) {
  if (isMediaEnabled && window.matchMedia("(max-width: 767px)")) {
    return children;
  }
  return null;
}

export function Desktop({ children }) {
  if (isMediaEnabled && !window.matchMedia("(max-width: 767px)")) {
    return children;
  }
  return null;
}
