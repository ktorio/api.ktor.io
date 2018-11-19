---
title: HSTS.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">HSTS</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">HSTS</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.HSTS$<init>(io.ktor.features.HSTS.Configuration)/config">config</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">)</span></code></div>

HSTS feature that appends <code>Strict-Transport-Security</code> HTTP header to every response.
See http://ktor.io/servers/features/hsts.html for details
See RFC 6797 https://tools.ietf.org/html/rfc6797

