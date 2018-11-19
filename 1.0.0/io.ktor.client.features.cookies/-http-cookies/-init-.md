---
title: HttpCookies.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.cookies</a> / <a href="index.html">HttpCookies</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">HttpCookies</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies$<init>(io.ktor.client.features.cookies.CookiesStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="../-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that handles sent <code>Cookie</code>, and received <code>Set-Cookie</code> headers,
using a specific <a href="-init-.html#io.ktor.client.features.cookies.HttpCookies$<init>(io.ktor.client.features.cookies.CookiesStorage)/storage">storage</a> for storing and retrieving cookies.

You can configure the <a href="-config/storage.html">Config.storage</a> and to provide <a href="-config/default.html">Config.default</a> blocks to set
cookies when installing.

