---
title: UnauthorizedResponse.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">UnauthorizedResponse</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">UnauthorizedResponse</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth.UnauthorizedResponse$<init>(kotlin.Array((io.ktor.auth.HttpAuthHeader)))/challenges">challenges</span><span class="symbol">:</span>&nbsp;<a href="../-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">)</span></code></div>

Response content with <code>401 Unauthorized</code> status code and <code>WWW-Authenticate</code> header of supplied <a href="-init-.html#io.ktor.auth.UnauthorizedResponse$<init>(kotlin.Array((io.ktor.auth.HttpAuthHeader)))/challenges">challenges</a>

### Parameters

<code>challenges</code> - to be passed with <code>WWW-Authenticate</code> header