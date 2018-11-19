---
title: GsonSupport.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.gson</a> / <a href="index.html">GsonSupport</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">GsonSupport</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.gson.GsonSupport$<init>(com.google.gson.Gson)/gson">gson</span><span class="symbol">:</span>&nbsp;<span class="identifier">Gson</span><span class="symbol">)</span></code></div>
<pre markdown="1">    install(ContentNegotiation) {
       register(ContentType.Application.Json, GsonConverter())
    }

    to be able to modify the gsonBuilder (eg. using specific serializers and/or
    configuration options, you could use the following (as seen in the ktor-samples):

    install(ContentNegotiation) {
        gson {
            registerTypeAdapterFactory(GsonAdaptersMyDocument())
            setDateFormat(DateFormat.LONG)
            setPrettyPrinting()
        }
    }</pre>