---
title: verifyWithOAuth2 - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./verify-with-o-auth2.html">verifyWithOAuth2</a></div>

# verifyWithOAuth2

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">verifyWithOAuth2</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/credential">credential</span><span class="symbol">:</span>&nbsp;<a href="-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="-o-auth-server-settings/-o-auth2-server-settings/index.html"><span class="identifier">OAuth2ServerSettings</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-o-auth-access-token-response/-o-auth2/index.html"><span class="identifier">OAuth2</span></a></code></div>

Implements Resource Owner Password Credentials Grant
see http://tools.ietf.org/html/rfc6749#section-4.3

Takes <a href="-user-password-credential/index.html">UserPasswordCredential</a> and validates it using OAuth2 sequence, provides <a href="-o-auth-access-token-response/-o-auth2/index.html">OAuthAccessTokenResponse.OAuth2</a> if succeeds

