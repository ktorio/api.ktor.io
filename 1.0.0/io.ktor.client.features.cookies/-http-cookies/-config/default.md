---
title: HttpCookies.Config.default - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.client.features.cookies</a> / <a href="../index.html">HttpCookies</a> / <a href="index.html">Config</a> / <a href="./default.html">default</a></div>

# default

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a <a href="default.html#io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</a> that will be called when the configuration is complete the specified <a href="storage.html">storage</a>.
The <a href="default.html#io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</a> can potentially add new cookies by calling <a href="../../-cookies-storage/add-cookie.html">CookiesStorage.addCookie</a>.

